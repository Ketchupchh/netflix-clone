import { Footer } from "@/components/home/footer";
import { HomeSections } from "@/components/home/home-sections";
import { MainHeader } from "@/components/home/main-header";
import { Jumbotron } from "@/components/jumbotron/jumbotron";
import { LanguageSelector } from "@/components/ui/langauge-selector";

export default function Index() {

  return (
    <>
      <MainHeader
        className="absolute top-0 items-center xl:px-[11.5rem] px-5 xs:px-10 z-50"
        disableSticky
      >
        <LanguageSelector
          className="flex flex-row ml-auto gap-1.5 bg-neutral-900/50 rounded-md border
                      border-neutral-600 py-1 px-2.5 text-sm items-center"
        />
        <button className="bg-main-accent font-NetflixSans-m text-sm rounded-md px-4 py-1.5 ml-3">
          Sign in
        </button>
      </MainHeader>

      <Jumbotron />

      <div className="flex flex-col w-full">
        
        <HomeSections />
    
        <Footer />
      </div>
    </>
  )
}
