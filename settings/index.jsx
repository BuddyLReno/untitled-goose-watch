import { colorSet } from "./colors";
import { fontFaces } from "./fonts";

function mySettings(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            Clock Color
          </Text>
        }
      >
        <ColorSelect settingsKey="clockColor" colors={colorSet} />
      </Section>
      <Section
        title={
          <Text bold align="center">
            Date Color
          </Text>
        }
      >
        <ColorSelect settingsKey="dateColor" colors={colorSet} />
      </Section>
      <Section
        title={
          <Text bold align="center">
            About
          </Text>
        }
      >
        <Text>
          For support, please tweet to me{" "}
          <Link source="https://twitter.com/buddylreno">@BuddyLReno</Link>
        </Text>
        <Text>If you like my work, please consider buying me a drink!</Text>
        <Link source="https://paypal.me/buddylreno?locale.x=en_US">
          Donate via PayPal 🥤
        </Link>
        <Text>
          Original image created by Reddit user{" "}
          <Link source="https://www.reddit.com/r/Amoledbackgrounds/comments/de2tu1/goose_1080_x_2340/">
            u/benewashere
          </Link>
        </Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
