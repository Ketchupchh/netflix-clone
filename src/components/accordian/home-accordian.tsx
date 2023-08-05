import { Accordion, AccordionTab } from "./accordion";

export function HomeAccordian() : JSX.Element
{
  return (
    <Accordion gap={9}>
      <AccordionTab
        title="What is Netflix?"
      >
        <p>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        </p>
        <p>
          You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
        </p>
      </AccordionTab>
      <AccordionTab title="How much does Netflix cost?">
        <p>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.
        </p>
      </AccordionTab>
      <AccordionTab title="Where can I watch?">
        <p>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        </p>
        <p>
          You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
        </p>
      </AccordionTab>
      <AccordionTab title="How do I cancel?">
        <p>
          Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </p>
      </AccordionTab>
      <AccordionTab title="What can i watch on Netflix?">
        <p>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
        </p>
      </AccordionTab>
      <AccordionTab title="Is Netflix good for kids?">
        <p>
          The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
        </p>
        <p>
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </p>
      </AccordionTab>
    </Accordion>
  );
}