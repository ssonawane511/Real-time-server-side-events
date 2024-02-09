import { createContext, useState } from "react";
import { connectServerStream } from '../utils/api';

export const iotContext = createContext();

const IotProvider = (props) => {
    const [deviceData, SetDevicesData] = new useState(0)
    const log = (data) => {
        console.log(data);
    }
    const handleConnectServerEventStream = async (pageId) => {
        try {
            const eventStream = await connectServerStream();
            eventStream.onopen = function (e) {
                log("Event: open");
            };
            eventStream.onerror = function (e) {
                log("Event: error");
                if (this.readyState == EventSource.CONNECTING) {
                    log(`Reconnecting (readyState=${this.readyState})...`);
                } else {
                    log("Error has occured.");
                }
            };
            eventStream.addEventListener('iot-pub', function (e) {
                log("Event: message, data:" + e.data);
                const {data} = JSON.parse(e.data)
                SetDevicesData(Math.trunc(data))
            });
            eventStream.onmessage = function (e) {
                log("Event: message, data: " + e.data);
            };

        } catch (error) {
            console.error(error);
        }
    }

    return <iotContext.Provider
        value={{
            data: deviceData,
            connect: handleConnectServerEventStream
        }}>
        {props.children}
    </iotContext.Provider>
}

export default IotProvider;