import Card from "src/components/Elements/Card/Card";

const Index = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <Card>
          <Card.Header>
            <h5 className="card-heading">Nagłówek</h5>
          </Card.Header>
          <Card.Body>Body</Card.Body>
          <Card.Footer>Test</Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Index;
