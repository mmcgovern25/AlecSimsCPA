import { benefits } from "../constants";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from './Button';

const Benefits = () => {
  return (
    <section id="Benefits">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Here's what you can expect when working with me"
        />

        <div className="flex flex-wrap gap-3 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[20rem] lg:max-w-[22rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                {/* Render the text with line breaks */}
                <div className="text-n-3 body-3 mb-6">
                  {item.text.split('\n').map((point, index) => (
                    <div key={index}> {/* Apply smaller margin */}
                      {index > 0 && <br />} {/* Add line break if not the first item */}
                      {point.trim()} {/* Trim whitespace from the point */}
                    </div>
                  ))}
                </div>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="bg-gray-500 rounded-full p-1"
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />

            </div>
          ))}
        </div>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default Benefits;
