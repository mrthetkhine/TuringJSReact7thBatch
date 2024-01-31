"use client";
import ButtonWithTooltip from "./ButtonWithTooltip";

export default function LayoutEffectDemo()
{
    return (<div>
        <ButtonWithTooltip
            tooltipContent={
                <div>
                    This tooltip does not fit above the button.
                    <br />
                    This is why it's displayed below instead!
                </div>
            }
        >
            Hover over me (tooltip above)
        </ButtonWithTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithTooltip
            tooltipContent={
                <div>This tooltip fits above the button</div>
            }
        >
            Hover over me (tooltip below)
        </ButtonWithTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithTooltip
            tooltipContent={
                <div>This tooltip fits above the button</div>
            }
        >
            Hover over me (tooltip below)
        </ButtonWithTooltip>
    </div>);
}