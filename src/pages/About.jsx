import Card from "../Card";
import Paragraph from "../Paragraph";
const AboutPage = () => {
  return (
    <div
      id="about"
      className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          About Me
        </h1>
        <h6 className="text-lg text-center text-gray-800 mb-8">
          Meet Oluwadamilare Adamolekun!
        </h6>
        <Card>
          <div className="text-lg text-gray-700">
            <p>
              Hey there, I'm Oluwadamilare Adamolekun, but you can call me
              Dammy!
            </p>
            <Paragraph>
              I'm a 6-year-old dynamo hailing from the bustling city of Lagos,
              Nigeria.
            </Paragraph>
            <Paragraph>
              When I'm not conquering the world of academia at Acron Shield
              Foundation School, you'll find me embarking on epic adventures!
            </Paragraph>
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What I Love Doing
          </h2>
          <div className="text-lg text-gray-700">
            <p>
              I'm a gaming guru! From scoring goals in FIFA to cruising through
              the streets in GTA, I'm always up for some console action.
            </p>
            <Paragraph>
              But hey, life isn't all about gaming! I also enjoy diving into my
              school homework and exploring the wonders of the internet for the
              coolest cartoons and animations.
            </Paragraph>
            <Paragraph>
              So whether I'm leveling up in a game or expanding my knowledge
              online, you can bet I'm always up to something exciting!
            </Paragraph>
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Future Aspirations
          </h2>
          <div className="text-lg text-gray-700">
            <p>
              I've got big dreams for the future! Sometimes I imagine soaring
              through the sky as a fearless pilot, inspired by the tales my
              uncle shares about aviation.
            </p>
            <Paragraph>
              Other times, I envision myself donning a superhero cape and saving
              the world from villains, just like my favorite heroes from
              Spiderman to Batman, to CatBoy of PJ Mask cartoon series, to
              Superman!
            </Paragraph>
            <Paragraph>
              There was even a moment when I thought about becoming a doctor,
              but then I realized I'd rather explore the ocean depths as a brave
              marine, flying fighter jets and dodging obstacles like in GTA 5
              (except for the military base part, that's too tough even for
              me!).
            </Paragraph>
            <Paragraph>
              As you can see, my future is filled with endless possibilities and
              adventures! So stay tuned for the next chapter in my journey – who
              knows what I'll dream up next?
              <Paragraph>
                And like the popular saying amongst gamers like myself; "Life is
                like a video game – full of challenges, adventures, and endless
                possibilities. Let's press start and see where the journey takes
                us!💪"
              </Paragraph>
            </Paragraph>
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Favorite Quote
          </h2>
          <div className="text-lg text-gray-700">
            <p>"Be contented."</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
