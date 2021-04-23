import Image from "next/image";

function Viewers() {
  return (
    <div className="mt-9 pt-[30px] pb-[26px] grid gap-6 grid-cols-1 md:grid-cols-5">
      <div className="viewers-image-wrapper group">
        <img
          src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-disney.png?raw=true"
          className="viewers-image"
          loading="lazy"
        />
        <video
          src="/videos/1564674844-disney.mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
          type="video/mp4"
          className="viewers-video"
        />
      </div>
      <div className="viewers-image-wrapper group">
        <img
          src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-pixar.png?raw=true"
          className="viewers-image"
          loading="lazy"
        />
        <video
          src="/videos/1564676714-pixar.mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
          type="video/mp4"
          className="viewers-video"
        />
      </div>
      <div className="viewers-image-wrapper group">
        <img
          src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-marvel.png?raw=true"
          className="viewers-image"
          loading="lazy"
        />
        <video
          src="/videos/1564676115-marvel.mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
          type="video/mp4"
          className="viewers-video"
        />
      </div>
      <div className="viewers-image-wrapper group">
        <img
          src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-starwars.png?raw=true"
          className="viewers-image"
          loading="lazy"
        />
        <video
          src="/videos/1608229455-star-wars.mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
          type="video/mp4"
          className="viewers-video"
        />
      </div>
      <div className="viewers-image-wrapper group">
        <img
          src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/viewers-national.png?raw=true"
          className="viewers-image"
          loading="lazy"
        />
        <video
          src="/videos/1564676296-national-geographic.mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
          type="video/mp4"
          className="viewers-video"
        />
      </div>
    </div>
  );
}

export default Viewers;
