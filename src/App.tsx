import "./App.css";
import React from "react";

import TimerContainer from "./components/TimerContainer";
import {Route, Routes} from "react-router-dom";
import BottomNav from "./components/BottomNav";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

const RouteContainer = styled.div`
  display: flex;
  // TODO: safe-area
  height: 90%;
`

const App: React.FC = () => {
    return (
        <Container>
            <RouteContainer>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <TimerContainer
                                times={[90000, 180000, 300000]}
                                buttonColor={"bg-orange-500"}
                            />
                        }
                    />
                    <Route
                        path="/second"
                        element={
                            <TimerContainer
                                times={[40000, 60000, 90000]}
                                buttonColor={"bg-[#F5C3C2]"}
                            />
                        }
                    />
                </Routes>
            </RouteContainer>
            <BottomNav/>
        </Container>
    );
};

export default App;
