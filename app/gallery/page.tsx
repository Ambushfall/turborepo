import styles from '@app/page.module.css'
import { Gallery } from '@components/Gallery';
import { twtitle } from '@tw/styles';

const { container, main, title } = styles

const Page = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/imagelist`)
    const data = await res.json()

    return (
        <div className={container}>
            <div className={main}>
                <Title Name='Gallery' Title={'Proof of Concept'} />
                <Gallery images={data} />
            </div>
        </div>
    );
};

const Title = ({ Name, Title }: { Name: string, Title: String }) => {
    return (
        <h1 className={twtitle}>
            {Name} {Title}
        </h1>
    )
}

export default Page;