import { arrowRight } from "../assets/icons";
import { cloth8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center 
    max-lg:flex-col gap-10
    w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-blue-950"> Super Quality</span>{" "}
          Clothes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Indulge in unmatched quality! Our clothing is meticulously crafted with premium materials, ensuring durability and luxurious comfort. Each garment reflects our commitment to excellence, blending sophistication with enduring style. Elevate your wardrobe with pieces that embody the perfect fusion of craftsmanship and fashion-forward sensibility.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to ensure detail and excellence ensures your
          satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" iconURL={arrowRight}/>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={cloth8}
          alt="Shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
