import Image from "next/image";

const Images = ({ src, alt }: {src: string, alt: string} ) => {
    return (
        <Image src={src} alt={alt} width={300} height={300} style={{ borderRadius: '15px', marginTop:'20px', margin: '0 auto' }}/>
    )
}

export default Images;