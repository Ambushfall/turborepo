import Image from "next/image";

// display infomation from github profile
const displayProfile = ({ profile }: { profile: any; }) => {

    return (<>
        <figure>
            <Image alt="user avatar" src={profile.avatar_url} />
        </figure>
        <div>
            <h2><a href={profile.blog}><strong>{profile.name}</strong></a></h2>
            <p>{profile.bio}</p>
            <p>
                <strong>Location:</strong> {profile.location}
            </p>
            <p>
                <strong>@{profile.login} </strong>
                Repos: {profile.public_repos}
                Gists: {profile.public_gists}
            </p>
        </div></>
    );
};


export default displayProfile