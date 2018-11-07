import * as ts from "typescript"
export declare type InterpolationNode = ts.Identifier | ts.PropertyAccessExpression
export default function astify(literal: any, interpolations?: Array<InterpolationNode>): any
