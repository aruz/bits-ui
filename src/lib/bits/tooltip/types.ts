import type { CreateTooltipProps, TooltipComponentEvents } from "@melt-ui/svelte";
import type {
	Expand,
	HTMLDivAttributes,
	OmitOpen,
	OmitForceVisible,
	Transition,
	TransitionParams,
	OnChangeFn,
	AsChild
} from "$internal/index.js";
import type { HTMLButtonAttributes } from "svelte/elements";

type Props = Expand<
	OmitOpen<OmitForceVisible<CreateTooltipProps>> & {
		open?: CreateTooltipProps["defaultOpen"] & {};
		onOpenChange?: OnChangeFn<CreateTooltipProps["defaultOpen"]>;
	}
>;

type ContentProps<T extends Transition = Transition> = Expand<
	{
		transition?: T;
		transitionConfig?: TransitionParams<T>;
		sideOffset?: number;
	} & AsChild
> &
	HTMLDivAttributes;

type TriggerProps = AsChild & HTMLButtonAttributes;
type ArrowProps = Expand<
	{
		size?: number;
	} & AsChild
> &
	HTMLDivAttributes;

type TriggerEvents = TooltipComponentEvents["trigger"];
type ContentEvents = TooltipComponentEvents["content"];

export type {
	Props,
	ArrowProps,
	TriggerProps,
	ContentProps,
	//
	Props as TooltipProps,
	ArrowProps as TooltipArrowProps,
	ContentProps as TooltipContentProps,
	TriggerProps as TooltipTriggerProps,
	//
	TriggerEvents,
	ContentEvents,
	//
	TriggerEvents as TooltipTriggerEvents,
	ContentEvents as TooltipContentEvents
};
