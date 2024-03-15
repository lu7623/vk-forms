import "./App.css";
import { View, Panel, PanelHeader, Root, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import CatfactForm from "./components/CatForm/CatfactForm";
import AgifyForm from "./components/AgifyForm/AgifyForm";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState('catfact');
  return (
    <Root activeView="view">
      <View id="view" activePanel={active}>
        <Panel id="catfact">
          <PanelHeader>Cat Fact</PanelHeader>
          <CatfactForm />
          <div>
          <Button 
              size="l"
              onClick={() => setActive('name')}>To Agify form</Button>
            </div>
        </Panel>
        <Panel id="name">
          <PanelHeader>Get an age</PanelHeader>
          <AgifyForm />
          <Button
            size="l"
            onClick={() => setActive('catfact')}>To CatFact form</Button>
        </Panel>
      </View>
    </Root>
  );
}
