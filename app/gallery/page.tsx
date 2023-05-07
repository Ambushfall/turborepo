import styles from '@app/page.module.css'
import { Gallery } from '@components/Gallery';
import { twtitle } from '@tw/styles';
import { getImages } from '@utils/getImages';

const { container, main, title } = styles

export const revalidate = 10;


export default async function Page() {

    const data = await getImages()

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