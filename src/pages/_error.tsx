import {Container, Text} from "@/styles/commonStyled";

const getErrorMessage = (statusCode) => {
    switch (statusCode) {
        case 404:
            return "404 | Resource not found..."
        default:
            return "Internal server error..."
    }
}

const Error = ({statusCode}): JSX.Element => {
    return (
        <Container>
            <Text>{getErrorMessage(statusCode)}</Text>
        </Container>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
