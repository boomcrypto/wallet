import React from "react";
import {Box, Card, CardContent} from "@mui/material";
import ListRow from "./ListItem";
import Title from "../common/Title";

const MoreSettingsCard: React.FC = () => {
    return (
        <Card sx={{width: 500, borderRadius: 2, margin: 2}} variant="outlined">
            <>
                <CardContent>
                    <MoreCardHeader text={"More"}/>
                    <ListRow text={"Fees"} onClick={() => alert("hello me.")}/>
                    <ListRow text={"Learn about RunRiot"} onClick={() => alert("hello me.")}/>
                    <ListRow text={"Twitter"} onClick={() => alert("hello me.")}/>
                    <ListRow text={"Email us"} onClick={() => alert("hello me.")}/>
                </CardContent>
            </>
        </Card>
    )
}

const MoreCardHeader: React.FC<{ text: string }> = ({text}) => {
    return (
        <Box sx={{padding: 1, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Title text={text}/>
        </Box>
    )
}

export default MoreSettingsCard;
