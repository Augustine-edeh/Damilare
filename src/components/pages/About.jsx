import Card from "../ui/Card";
import Paragraph from "../ui/Paragraph";
const AboutPage = () => {
  return (
    <div
      id="about"
      className="bg-gray-100 min-h-screen py-44 px-4 sm:px-6 lg:px-8"
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
              I'm an 8-year-old champ hailing from the bustling city of Lagos,
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
              Console time is always fun for me! From scoring goals in FIFA to
              cruising through the streets in GTA, to conquering dreaded
              opponent in the almighty `God of war`. I'm always up for some
              console action.
            </p>
            <Paragraph>
              But hey, life isn't all about gaming! I also enjoy diving into my
              school homework and exploring the wonders of the internet for the
              coolest educational videos and animations.
            </Paragraph>
            <Paragraph>
              So whether I'm leveling up in a game or expanding my knowledge
              online, you can bet I'm always up to something exciting!
            </Paragraph>
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Running for Assembly Prefect
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            🎉 Exciting news! I'm on a mission to bring fun and leadership to
            Acron Shield Foundation School as I run for Assembly Prefect! 🌟 My
            vision is to create an amazing school environment where every voice
            is heard, and together, we can achieve great things! So dear Friends
            and Colleagues at school, when the day comes to cast your vote, do
            well to cast it for Oluwadamilare Adamolekun!
          </p>
          <p>Checkout banner below for a glimpse of my manifesto...</p>
          <img
            src="/Campaign-poster-1.png"
            alt="Campaign Poster"
            className="my-4 w-full h-auto"
          />
          <div className="text-lg text-gray-700">
            {/* Insert the campaign speech here */}
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
