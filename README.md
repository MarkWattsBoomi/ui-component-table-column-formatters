# Table Column Formatters

This component allows you to apply numerous formats to data in Flow table columns.


## Setup

- Grab the js file from the /dist folder and upload it as an asset to your tenant.

- Add the file to your player code like this: -

        requires: ['core', 'bootstrap3'],
        customResources: [
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/ColumnControls.js'
                ],

- In the page designer open the metadata and find the column you want to apply the formatter to and change its "componentType" to one of the following: -

## Formatter Types

### DateTime Columns

- DateDDMMMYY

This will output the date like "14 May 07"

- DateTimeDDMMMYYHHMM

This will output the date like "12 Jan 16 14: 45" but the source is expected to be an epoch number of seconds.

- EpochDateDDMMMYY

This will output the date like "14 May 07" but the source is expected to be an epoch number of seconds.

- EpochDateTimeDDMMMYYHHMM

This will output the date like "12 Jan 16 14: 45"

- ElapsedTime

This will show the diference between the date and now and show it as x days, x hours, x minutes, x seconds.

- ElapsedTimeLiveLong

This will show the diference between the date and now and show it as x days, x hours, x minutes, x seconds and will update this every seconds

- ElapsedTimeLiveShort	

This will show the diference between the date and now and show it as xd/xh/xm/xs and will update this every seconds

- ElapsedTimeFriendly		

This will show the diference between the date and now and show it as a friendly string like "a few minutes ago" or "an hour ago"

### Boolean Columns

- BooleanIcon				This will display a tick for true and a cross for false


### Specials

- HoverBox

This will display an icon in the column which when hovered pops up a dialog

Add attributes: -

hoverboxIcon    -   the name of a glyphicon to show in the hover button
hoverboxPosition - the relative position of the popup box left, right, upper-left, lower-left, upper-right, lower-right, above, below

use CSS overrides to style it all

the content of the popup box comes from the coulumn value, it supports the "Content" type.


- TableRowFormatter

This will apply a css style to the table row based on the value of the column.

Add an attribute to the table called "trfConfig" and set its value to a JSON String like this: -

{
  “possibleColumnValue”:”styleNameToApply”,
  “possibleColumnValue”:”styleNameToApply”,
  “possibleColumnValue”:”styleNameToApply”
}

So an example would be { “complete”:”green-row”, “inprogess”:”yellow-row”,  “error”:”red-row”}

This tells the component to look for a value of “complete” in the column and if found to add a class called .green-row to the row.

Add the corresponding styles to your player e.g.

<style >
        .green-line {
            background-color: green;
        }
        
        .red-line {
            background-color: red;
            background: linear-gradient(-45deg, #e59090, #c06868, #ed3737 );
            background-size: 400% 400%;
            -webkit-animation: gradientBG 10s ease infinite;
            animation: gradientBG 10s ease infinite;
        }

        @-webkit-keyframes gradientBG {
        	0% {
        		background-position: 0% 50%;
        	}
        	50% {
        		background-position: 100% 50%;
        	}
        	100% {
        		background-position: 0% 50%;
        	}
        }
        @keyframes gradientBG {
        	0% {
        		background-position: 0% 50%;
        	}
        	50% {
        		background-position: 100% 50%;
        	}
        	100% {
        		background-position: 0% 50%;
        	}
        }
    </style>


- LookupValue			

This will allow you to look up a value from a page component containing a list specifying the key and value columns and to 
output the result instead of the key. e.g. the data is a numeric value that equates to a friendly text representation by looking it up in a list.
for each column using this you need to add attributes to the table  - 3 for each column: -
LookupListComponent_<typeElementPropertyId of the column>  =  The name of the page component which has the list in it's data source - name not id
LookupListKeyAttribute_<typeElementPropertyId of the column>  =  The name of the column containing the key lookup field
LookupListResultAttribute_<typeElementPropertyId of the column>  =  The name of the column containing the value you want to display.
The typeElementPropertyId is found in the metadata editor looking at the specific column of the table

- PercentProgressBar	

This is a coloured progress bar which uses the column value as a percent and displays the the value out of 100 as a filled coloured block.

- Hyperlink				

This displays the value as a clickable hyperlink which will open in a new window when clicked.

- StatusIcon			

This will display a bootstrap glyph icon and tooltip equivalent to the following values: -
						""  = glyphicon-option-horizontal  "Not Set"
						"s" = glyphicon-hourglass  "Staged"
						"c" = glyphicon-ok  "Complete"
						"a" = glyphicon-flash  "Active


- Thumbnail
This will display an image in the column.  it expects the field's content value to either be the uri to an image or a data-uri containing the base 64 data.
Set an attribute on the table named "image-scaled-width" to the width you want the image displayed at / scaled to
