import React from "react";
import {Box} from "@mui/material";
import AccountSettingsCard from "../components/AccountCardSettings";
import MoreSettingsCard from "../components/MoreSettingsCard";
import BoomToolbar from "../components/BoomToolbar";

const Settings: React.FC = () => {
    return (
        <div className="App">
            <BoomToolbar/>
            <Box sx={{
                padding: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <AccountSettingsCard/>
                <MoreSettingsCard/>
            </Box>
        </div>
    )
}

export default Settings;
