import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import './editor.scss';
import {
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const maxPosts = 5;
	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'gadgetreview' ) }
				>
					<RangeControl
						label={ __(
							'Max Posts',
							'gadgetreview'
						) }
						value={ attributes.quantity }
						onChange={ ( value ) => {
							const newValue =  Math.min(Math.max(value, 1), maxPosts);
							setAttributes( {
									quantity: parseInt( newValue, 10 ),
							} );
						} }
						min={ 1 }
						max={ maxPosts }
						help={ __(
							'How many posts to display?',
							'gadgetreview'
						) }
					/>
					</PanelBody>
				</InspectorControls>
				<ServerSideRender
						block="create-block/gadgetreview"
						attributes={ attributes }
				/>
		</div>
);
}
