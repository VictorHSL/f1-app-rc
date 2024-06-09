import React from "react";
import { F1NewsData } from "src/models/f1news.model";

export interface F1NewsProps extends React.BaseHTMLAttributes<F1NewsProps> {
    f1NewsData: F1NewsData;
}