import Image from "next/image";
import { aboutItems } from "@/data/data";

const About = () => {
  return (
    <section className="py-20 border-t border-neutral-200">
      <div className="container space-y-14">
        <div className="space-y-3">
          <div className="text-4xl lg:text-7xl font-bold flex items-center">
            <span>Ab</span>
            <Image
              src="/images/images.jpg"
              alt="About icon"
              width={512}
              height={512}
              className="size-14 inline-block rounded-full shrink-0"
            />
            <span>ut me</span>
          </div>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
            nesciunt eligendi blanditiis numquam veritatis libero accusamus
            quis, commodi totam eaque sunt porro adipisci velit enim, dolores
            possimus quos harum atque.
          </p>
        </div>
        <div className="border-t border-neutral-300">
          {aboutItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-8 border-b border-neutral-300 py-2"
            >
              <div className="size-24 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={512}
                  height={512}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="">
                <h3 className="text-4xl font-bold uppercase">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
