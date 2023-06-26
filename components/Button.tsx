import { Button } from "@nextui-org/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Buttons({ type, name }: { type: string, name?: string }) {

    if (type === "GitHub") {
        return (
            <Button icon={<FaGithub />} color="success">
                GitHub
            </Button>
        );
    }

    return (
        <Button icon={<FaExternalLinkAlt />} color="success">
            {name}
        </Button>
    );
}
