import Card from "../Card";
function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
          About me
        </h2>
        <h2 className="text-lg text-center text-gray-800 mb-5">
          Meet Oluwadamilare!
        </h2>
        <Card>
          <div className="text-lg text-gray-700">
            <p>Hi, I'm Oluwadamilare Adamolekun, but you can call me Dammy!</p>
            <p className="mt-4">
              I'm a 6-year-old dynamo hailing from the bustling city of Lagos,
              Nigeria.
            </p>
            <p className="mt-4">
              When I'm not conquering the world of academia at Acron Shield
              Foundation School, you'll find me embarking on epic adventures!
            </p>
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
            <p className="mt-4">
              But hey, life isn't all about gaming! I also enjoy diving into my
              school homework and exploring the wonders of the internet for the
              coolest cartoons and animations.
            </p>
            <p className="mt-4">
              So whether I'm leveling up in a game or expanding my knowledge
              online, you can bet I'm always up to something exciting!
            </p>
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Fun Facts About Me
          </h2>
          <ul className="text-lg text-gray-700 list-disc pl-6">
            <li>
              I dream of becoming a professional gamer and competing in esports
              tournaments!
            </li>
            <li className="mt-2">
              I'm a big fan of superhero cartoons, and I aspire to be a hero
              just like them!
            </li>
            <li className="mt-2">
              I once completed a particularly tricky homework assignment in
              record time – my brain is faster than a speeding bullet!
            </li>
          </ul>
        </Card>
        <Card>
          <p className="text-lg text-gray-700">
            "Life is like a video game – full of challenges, adventures, and
            endless possibilities. Let's press start and see where the journey
            takes us!"
          </p>
          <p className="text-right text-gray-800 mt-4">
            - Oluwadamilare Adamolekun
          </p>
        </Card>
      </div>
    </div>
  );
}

export default AboutPage;
