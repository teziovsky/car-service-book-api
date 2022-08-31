import {
  StyledBreadcrumbs,
  StyledItem,
  StyledList,
  StyledNavLink,
} from "components/Layouts/Breadcrumbs/Breadcrumbs.styled";
import React from "react";

const Breadcrumbs = () => {
  return (
    <StyledBreadcrumbs>
      <StyledList>
        <StyledItem>
          <StyledNavLink to={"/app"}>Home</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to={"/app/cars"}>Cars</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to={"/app/cars/1"}>Honda Civic VIII</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to={"/app/cars/1/edit"}>Edit</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to={"/app/cars/1/edit"}>Edit repair</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to={"/app/cars/1/edit"}>Edit</StyledNavLink>
        </StyledItem>{" "}
        <StyledItem>
          <StyledNavLink to={"/app/cars/1/edit"}>Edit</StyledNavLink>
        </StyledItem>{" "}
        <StyledItem>
          <StyledNavLink to={"/app/cars/1/edit"}>Edit</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to={"/app/cars/1/edit"}>Edit</StyledNavLink>
        </StyledItem>
      </StyledList>
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
