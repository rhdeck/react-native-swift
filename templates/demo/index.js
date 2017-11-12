import {
  NativeModules,
  NativeEventEmitter
} from 'react-native';
const rnswifttemplate = NativeModules.rnswifttemplate;

export default testSend(a, b) {
  console.log(
    "Constants available immediately: ", 
    swiftTest.a, 
    swiftTest.b
  );
  const e = new NativeEventEmitter(swiftTest);
  const s = e.addListener("Hello", (arr) => {
    console.log("Received a hello event", arr.message);
  })
  return swiftTest.addEvent(a, b)
}
