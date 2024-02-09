import { useCallback, useContext } from "react";
import { useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { iotContext } from "../context/iotContext";
const Speedometer = (props) => {
    const { data, connect } = useContext(iotContext)
    const connectCallback = useCallback(()=>{
        connect();
    },[])

    useEffect(() => {
        connectCallback()
    },[])

    return (
        <div className="center">
            <h1 className="title">SpeedoMeter</h1>
            <br />
            <ReactSpeedometer
                maxValue={120}
                ringWidth={20}
                customSegmentStops={[
                    0,
                    12,
                    24,
                    36,
                    48,
                    60,
                    72,
                    84,
                    96,
                    108,
                    120
                ]}
                segmentColors={[
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA"
                ]}
                needleTransitionDuration={2000}
                needleTransition="easeElastic"
                currentValueText="${value} kW"
                value={data}
            />
        </div>
    );
}
export default Speedometer;