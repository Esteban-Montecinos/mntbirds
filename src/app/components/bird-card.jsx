'use client'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
export default function BirdCard({nombre, imagen, latin}) {
  return (
    <Card className="h-full p-2">
      <CardHeader className="flex-col items-start p-2">
        <small className="text-default-500">{latin}</small>
        <h4 className="font-bold text-large">{nombre}</h4>
      </CardHeader>
      <CardBody className="p-2 overflow-visible">
      <Image
          alt={{nombre}}
          className="object-cover rounded-xl"
          src={imagen}
          width={230}
        />
      </CardBody>
    </Card>
  )
}
