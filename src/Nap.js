import { Container, Row, Col, Form, Button } from "react-bootstrap"
function Nap() {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 4, offset: 3 }}>
          <Form
            action="http://localhost:8081/upload_file"
            method="post"
            enctype="multipart/form-data"
          >
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Select a File"
                name="file"
              />
            </Form.Group>
            <Form.Group>
              <Button variant="info" type="submit">
                Upload
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default Nap