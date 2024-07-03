import styles from 'styles/page.module.css'
import { Gallery } from 'components/gallery/Gallery';
import { twtitle } from 'tw/styles';
import { getImages } from 'utils/index';



const { container, main, title } = styles

// export const revalidate = 10;
export const dynamic = 'force-static';


export default async function Page() {

    /* Reads the content of the midj dir and returns an array of strings */
    const imageFilenames = await getImages()

    return (
        <>
            <div className={container}>
                <div className={main}>
                    <Title Name='Gallery' Title={'Proof of Concept'} />
                    <Gallery images={imageFilenames} />
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