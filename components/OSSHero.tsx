import CardOSS from './CardOSS';
import Button from './Button';

const OSSHero = ({
    repo,
    href,
    alt,
    src,
}:{
    repo: string,
    href?: string,
    alt: string,
    src: string,
}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px'
        }}>
                <CardOSS src={src} alt={alt} />
                <Button repo={repo} href={href} />
        </div>
    )
}

export default OSSHero;