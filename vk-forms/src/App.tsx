import "./App.css";
import { Button, View, Panel, PanelHeader, FormItem, Textarea, Root } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

export default function App() {
  return (
<Root activeView="view">
      <View id="view" activePanel="catfact">
        <Panel id="catfact">
          <PanelHeader>Textarea</PanelHeader>
          <div>
          <Button
            align="center"
            appearance="negative"
            rounded
            stretched={false}
            onClick={() => {}}
          >
            Click me
          </Button>
          </div>
         
          <FormItem>
        <Textarea  />
      </FormItem>
        </Panel>
        <Panel id="name"></Panel>
      </View>
      </Root>
  );
}
