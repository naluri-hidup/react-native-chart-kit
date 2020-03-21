// Type definitions for ReactNativeChartKit 2.6
// Project: https://github.com/indiespirit/react-native-chart-kit
// TypeScript Version: 3.0

import * as React from 'react'

// LineChart
export interface LineChartProps {
  data: object
  width: number
  height: number
  withDots?: boolean
  withShadow?: boolean
  withInnerLines?: boolean
  withOuterLines?: boolean
  fromZero?: boolean
  yAxisLabel?: string
  chartConfig: object
  decorator?: Function
  /**
   * Callback that is called when a data point is clicked.
   */
  onDataPointClick?: (data: {
    index: number;
    value: number;
    dataset: Dataset;
    x: number;
    y: number;
    getColor: (opacity: number) => string;
  }) => void;
  /**
   * Renders additional content for dots in a line chart.
   * Takes `({x, y, index})` as arguments.
   */
  renderDotContent?: (params: {
    x: number;
    y: number;
    index: number;
    value: number;
  }) => React.ReactNode;
  style?: object
  bezier?: boolean
  getDotColor?: (dataPoint: any, index: number) => string
  horizontalLabelRotation?: number
  verticalLabelRotation?: number
}

export class LineChart extends React.Component<LineChartProps> {}

// ProgressChart
export interface ProgressChartProps {
  data: Array<number>
  width: number
  height: number
  chartConfig: object
}

export class ProgressChart extends React.Component<ProgressChartProps> {}

// BarChart
export interface BarChartProps {
  data: object
  width: number
  height: number
  fromZero?: boolean
  yAxisLabel: string
  chartConfig: object
  style?: object
  horizontalLabelRotation?: number
  verticalLabelRotation?: number
}

export class BarChart extends React.Component<BarChartProps> {}

// StackedBarChart
export interface StackedBarChartProps {
  data: object
  width: number
  height: number
  chartConfig: object
  style?: object
}

export class StackedBarChart extends React.Component<StackedBarChartProps> {}

// PieChart
export interface PieChartProps {
  data: Array<any>
  width: number
  height: number
  chartConfig: object
  accessor: string
  backgroundColor: string
  paddingLeft: string
  center?: Array<number>
  absolute?: boolean
}

export class PieChart extends React.Component<PieChartProps> {}

// ContributionGraph
export interface ContributionGraphProps {
  values: Array<any>
  endDate: Date
  numDays: number
  width: number
  height: number
  chartConfig: object
  accessor?: string
}

export class ContributionGraph extends React.Component<ContributionGraphProps> {}

// AbstractChart
export class AbstractChart extends React.Component {}
