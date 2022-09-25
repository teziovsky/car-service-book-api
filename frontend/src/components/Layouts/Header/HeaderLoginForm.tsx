import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Button from "components/Elements/Button/Button";
import Input from "components/Forms/Input/Input";
import { LoginProps, useAuth } from "context/authContext";
import React from "react";
import { useForm } from "react-hook-form";
import { DefaultProps } from "src/main";
import { hasDigitRegex, hasLowerRegex, hasUpperRegex } from "src/plugins";
import { object, string } from "yup";

export type Props = DefaultProps & {
  closeCb?: Function;
};

const schema = object().shape({
  email: string().required().email().label("Email address"),
  password: string()
    .required()
    .min(8)
    .matches(hasDigitRegex, "Password must contain at least 1 digit.")
    .matches(hasLowerRegex, "Password must contain at least 1 lowercase letter.")
    .matches(hasUpperRegex, "Password must contain at least 1 uppercase letter.")
    .label("Password"),
});

const HeaderLoginForm = ({ closeCb }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ resolver: yupResolver(schema), reValidateMode: "onChange" });

  const { login } = useAuth();
  const onSubmit = async (data: LoginProps) => {
    await login(data);
    closeCb && closeCb();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input
        name="email"
        message={errors.email?.message}
        autoComplete="off"
        label="Email address"
        type="text"
        tag="input"
        register={register}
      />
      <Input
        name="password"
        message={errors.password?.message}
        label="Password"
        tag="input"
        type="password"
        register={register}
      />
      <Button className="justify-center" size="large" type="submit">
        Wyślij
      </Button>
    </form>
  );
};

export default HeaderLoginForm;
