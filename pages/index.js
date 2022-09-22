import AppHead from "../components/AppHead";

import Header from "../components/Header";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <AppHead />
      <Header landing />
      <main className="h-screen flex flex-col overflow-y-scroll scroll-smooth snap-y snap-mandatory ">
        <div className="flex-1">
          <Section
            title="Model 3"
            backgroundImage="model-3.jpg"
            backgroundImageSmall="model-3(2).jpg"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"
            showDownArrow
            id="Model 3"
          />
        </div>
        <div className="flex-1">
          <Section
            title="Model Y"
            backgroundImage="model-y.jpg"
            backgroundImageSmall="model-y(2).jpg"
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"
            id="Model Y"
          />
        </div>
        <div className="flex-1">
          <Section
            title="Model S"
            backgroundImage="model-s.jpg"
            backgroundImageSmall={"model-s(2).jpg"}
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"
            id="Model S"
          />
        </div>
        <div className="flex-1">
          <Section
            title="Model X"
            backgroundImage="model-x.jpg"
            backgroundImageSmall={"model-x(2).jpg"}
            leftButtonText="Custom Order"
            rightButtonText="Existing Inventory"
            id="Model X"
          />
        </div>
        <div className="flex-1">
          <Section
            title="Solar Panels"
            backgroundImage="solar-panel.jpg"
            backgroundImageSmall={"solar-panel(2).jpg"}
            leftButtonText="Order Now"
            rightButtonText="Learn More"
            id="Solar Panels"
          />
        </div>
        <div className="flex-1">
          <Section
            title="Solar Roof"
            backgroundImage="solar-roof.jpg"
            backgroundImageSmall={"solar-roof(2).jpg"}
            leftButtonText="Order Now"
            rightButtonText="Learn More"
            id={"Solar Roof"}
          />
        </div>
        <div className="flex-1">
          <Section
            title="Accessories"
            backgroundImage="accessories.jpg"
            backgroundImageSmall={"accessories(2).jpg"}
            leftButtonText="Shop Now"
            id={"Accessories"}
            footer
          />
        </div>
      </main>
    </>
  );
}
