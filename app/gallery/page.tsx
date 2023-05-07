import styles from '@app/page.module.css'
import { Gallery } from '@components/Gallery';
import { twtitle } from '@tw/styles';

const { container, main, title } = styles

export const revalidate = 10;


async function fetchGallery() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/imagelist`);
    return await res.json();
}

export default async function Page() {

    const data = await fetchGallery();

    return (
        <>
            <div className={container}>
                <div className={main}>
                    <Title Name='Gallery' Title={'Proof of Concept'} />
                    <Gallery images={data} />
                </div>
            </div>
        </>
    );
};

const Title = ({ Name, Title }: { Name: string, Title: String }) => {
    return (
        <h1 className={twtitle}>
            {Name} {Title}
        </h1>
    )
}