import "./App.css";
import { View, Panel, PanelHeader, Root } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import CatfactForm from "./components/CatForm/CatfactForm";

export default function App() {
  return (
    <Root activeView="view">
      <View id="view" activePanel="catfact">
        <Panel id="catfact">
          <PanelHeader>Cat Fact</PanelHeader>
          <CatfactForm />
        </Panel>
        <Panel id="name"></Panel>
      </View>
    </Root>
  );
}
