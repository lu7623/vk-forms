import "./App.css";
import { View, Panel, PanelHeader, Root } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import CatfactForm from "./components/CatForm/CatfactForm";
import AgifyForm from "./components/AgifyForm/AgifyForm";

export default function App() {
  return (
    <Root activeView="view">
      <View id="view" activePanel="name">
        <Panel id="catfact">
          <PanelHeader>Cat Fact</PanelHeader>
          <CatfactForm />
        </Panel>
        <Panel id="name">
          <PanelHeader>Get an age</PanelHeader>
          <AgifyForm />
        </Panel>
      </View>
    </Root>
  );
}
