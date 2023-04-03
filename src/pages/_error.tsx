import {Container, Text} from "@/styles/commonStyled";
import {NextPageContext} from "next";

const getErrorMessage = (statusCode: number | undefined) => {
    switch (statusCode) {
        case 404:
            return "404 | Resource not found..."
        default:
            return "Internal server error..."
    }
}

interface ErrorProps {
    statusCode?: number
}

const Error = ({statusCode}: ErrorProps): JSX.Element => {
    return (
        <Container>
            <Text>{getErrorMessage(statusCode)}</Text>
        </Container>
    );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
