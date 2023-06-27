import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export default function CardOSS({ src, alt, height, width }: { src: string, alt: string, height?: string, width?: string }) {

  return (
    <Card css={{ m:"10px auto", h: height, w: width, maxHeight: "50vh" }}>
    <Card.Body css={{ p:0 }}>
      <Card.Image
        src={src}
        layout="fill"
        alt={alt}
        objectFit="cover"
        objectPosition="center"
      />
    </Card.Body>
  </Card>
  )
}
