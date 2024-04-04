import { useEffect } from 'react';
import Script from 'next/script';

const TradingWidget = () => {

    return (
        <>
<div className="tradingview-widget-container">
  <div className="tradingview-widget-container__widget"></div>
  <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
  <script id="trading-view-script" type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js" async>
        {
            JSON.stringify({
                "colorTheme": "light",
                "dateRange": "12M",
                "exchange": "BSE",
                "showChart": true,
                "locale": "in",
                "width": "100%",
                "height": "100%",
                "largeChartUrl": "",
                "isTransparent": false,
                "showSymbolLogo": false,
                "showFloatingTooltip": false,
                "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
                "plotLineColorFalling": "rgba(41, 98, 255, 1)",
                "gridLineColor": "rgba(240, 243, 250, 0)",
                "scaleFontColor": "rgba(106, 109, 120, 1)",
                "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
                "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
                "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
                "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
                "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
              })
        }
  </script>
</div>
        </>
    );
};

export default TradingWidget;
