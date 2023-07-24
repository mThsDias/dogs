import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_POST } from "../../api";
import Error from "../ErrorComponent/Error";
import Loading from "../ErrorComponent/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhoto = ({ setModalPhoto, user, page, setInfinite }) => {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        async function fetchPhoto() {
            const total = 3;
            const { url, options } = PHOTOS_POST({
                page,
                total,
                user,
            });
            const { response, json } = await request(url, options);
            if (response && response.ok && json.length < total)
                setInfinite(false);
        }
        fetchPhoto();
    }, [request, user, page, setInfinite]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotoItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))}
            </ul>
        );
    else return null;
};

export default FeedPhoto;
