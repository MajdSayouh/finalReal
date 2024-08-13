import { ConfigProvider, Slider } from "antd";

function Sliader({ width = 480 }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            handleActiveColor: "#9daf9c",
            handleColor: "#9daf9c",
            trackColor: "#9daf9c",
            dotActiveBorderColor: "#9daf9c",
            trackBg: "#9daf9c",
            trackHoverBg: "#9daf9c",
          },
        },
      }}
    >
      <Slider
        style={{
          width: width,
          marginRight: 10,
        }}
        range
        defaultValue={[100, 50000]}
        min={0}
        max={50000}
        step={500}
        // color="#9daf9c"
      />
    </ConfigProvider>
  );
}

export default Sliader;
