import React from "react";

export const HockeyTeamDetailsColumns = [
    {
        Header: "Player",
        accessor: "player.fullName",
        Cell: props => (
            <span>
                <div className="rt-mobileHeader">
                    Player:
                </div>
                {props.value}
            </span>
        ),
        style: { textAlign: "left" },
        headerStyle: {
            color: "#000",
            background: "rgb(255,214,94)",
            background:
                "-moz-linear-gradient(top, rgba(255,214,94,1) 0%, rgba(254,191,4,1) 100%)",
            background:
                "-webkit-linear-gradient(top, rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%)",
            background:
                "linear-gradient(to bottom, rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%)"
        }
    }
];
