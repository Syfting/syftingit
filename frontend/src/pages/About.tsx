import Footer from "../components/Footer";
import EmailSignup from "../components/EmailSignup";
import TopNav from "../components/TopNav";

const About = () => {
  return (
    <div className="bg-white min-h-screen max-w-screen text-light font-sans">
      <TopNav />

      <div className="bg-brightRed text-light w-full h-[37rem] flex flex-col items-left px-[6rem] py-[8rem]">
        <img
            src="/assets/about-hand-cutting-cake.png"
            alt="Cupcake"
            className="absolute -top-[1.5rem] -right-0 w-[49rem] h-auto pointer-events-none"
          />
        <h1 className="text-left text-[4rem] font-semibold leading-snug">
          Syfting is a curated platform
        </h1>
        <h1 className="text-left text-[4rem] font-semibold leading-snug">
          that connects YOU to
        </h1>
        <h1 className="text-left text-[4rem] font-semibold leading-snug">
          local bakers in your
        </h1>
        <h1 className="text-left text-[4rem] font-semibold leading-snug">
          community.
        </h1>
      </div>
      
      <div className="bg-dark text-light h-[32rem] px-[6rem] py-[6rem]">
        <div className="max-w-[40rem]">
          <h1 className="text-left text-[2em] font-semibold leading-snug">
            From custom birthday cakes to
            sourdough loaves and indulgent pastries,
            Syfting makes it simple to discover and
            order from trusted, talented bakers
            nearby, all in one place. We’re
            reimagining dessert discovery with
            quality, connection, and culture at the
            center.
          </h1>
        </div>
      </div>

      <div className="flex w-full h-[60rem] bg-light p-8 justify-center items-center">
        <div className="w-[70rem] h-[50rem] flex">
          {/* left side */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src="/assets/about-our-story-card.jpg"
              alt="Person eating cake"
              className="object-cover w-full h-full"
            />
          </div>
          {/* right side */}
          <div className="w-[30rem] bg-lightBlue p-8 flex justify-center items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-darkBlue text-center">OUR STORY</h2>
                <hr className="border-darkBlue mb-6 w-[12rem] m-auto" />
                <p className="mb-4 max-w-prose text-dark text-[1.4rem] mx-[4rem]">
                  Syfting was born from a shared belief that food is more than sustenance. It’s a connector, a storyteller, and a cultural time capsule.
                </p>
                <p className="mb-4 max-w-prose text-dark text-[1.4rem] mx-[4rem]">
                  We grew up in households where celebrations were big, homemade, and full of love. Together, we created Syfting to reimagine how we find and experience desserts, not just as products, but as expressions of culture, creativity, and community.
                </p>
                <p className="mb-4 max-w-prose text-dark text-[1.4rem] mx-[4rem]">
                  It’s more than a marketplace. It’s a movement to uplift the entire community.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darkGreen w-full h-[34rem] flex justify-center items-center">
        <div className="text-left text-[2rem] text-lightGreen font-semibold leading-snug w-[50rem] px-[6rem]">
          Our mission is to empower
          independent, home-based bakers by
          providing an all-in-one platform that
          allows them to focus on what they do
          best: creating exceptional baked
          goods. Syfting gives bakers the tools to
          grow their brands, reach local
          customers, and build lasting
          connections within their communities.
        </div>
        <img
          src="/assets/5-badge1.png"
          alt="Cupcake"
          className="h-[28rem] w-auto"
        />
      </div>

      <div className="bg-lightBlue w-full h-[30rem] relative flex justify-end">
        <img
          src="/assets/57-badge4.png"
          alt="Cupcake"
          className="absolute -left-6 w-[28rem] h-auto -rotate-[12deg] z-20"
        />
        <img
          src="/assets/19-badge2.png"
          alt="Cupcake"
          className="absolute top-[14rem] left-[16rem] w-[18rem] h-auto z-20"
        />
        <div className="text-darkBlue text-left text-[1.7rem] font-semibold leading-snug w-[50rem] pr-[6rem] my-auto">
          We envision a world where quality and
          connection matter more than
          mass-production. Syfting champions
          the return of community-rooted
          craftsmanship, where your next-door
          neighbor is your baker, and handmade
          desserts carry stories, culture, and care.
          We want to lead the movement that
          redefines “local” as something deeply
          personal and proudly celebrated.
        </div>
      </div>

      <div className="bg-brightRed w-full min-h-[34rem] flex justify-center items-center">
        <div className="flex items-center justify-center gap-12">
          <div className="text-dark text-[1.6rem] w-[50rem] text-left font-semibold">
            Syfting exists to make meaningful
            celebrations easier, more personal, and
            more delicious, by connecting people with
            local bakers who care. We believe in
            honoring tradition, uplifting local talent,
            and supporting small businesses through
            joyful, shared experiences. Whether it’s a
            birthday, baby shower, or just because, it
            deserves better than a last-minute grocery
            store cake. We're here to help people find
            desserts that feel special and support the
            hands that made them.
          </div>
          <img
            src="/assets/31-badge3.png"
            alt="Cupcake"
            className="w-[24rem] rotate-[16deg] h-auto"
          />
        </div>
      </div>

      <div className="relative bg-beige w-full h-[64rem] flex flex-col items-center overflow-hidden">
        <div className="text-[3rem] font-bold mt-[4rem] text-dark text-center z-30">OUR VALUES
        </div>
        
        <img
          src="/assets/about-scalloped-background-with-images.png"
          alt="Our Values"
          className="absolute bottom-0 left-0 w-full object-cover z-20"
        />
        
      </div>

      <div className="-mt-[11rem] relative z-10">
        <img
          src="/assets/about-values-card.jpg"
          alt="Cupcake"
          className="w-full h-auto"
        />
      </div>

      <EmailSignup />
      <Footer />
    </div>
  );
};

export default About;
