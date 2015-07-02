//
//  CUTEAddressMapUITest.m
//  currant
//
//  Created by Foster Yin on 7/2/15.
//  Copyright (c) 2015 Foster Yin. All rights reserved.
//

#import "CUTETestCommon.h"
#import <KIF.h>
#import "CUTECommonMacro.h"
#import "KIFUITestActor+RentType.h"
#import "KIFUITestActor+Login.h"


SpecBegin(AddressMapUI)

describe(@"AddressMap", ^ {

    beforeAll(^{
        [tester login];
        [tester selectRentTypeWhole];
    });

    it(@"should get current location ok", ^ {
        [tester waitForTimeInterval:2];
        //location permission
        if ([tester tryFindingViewWithAccessibilityLabel:STR(@"允许") error:nil]) {
            [tester tapViewWithAccessibilityLabel:STR(@"允许")];
        }

        [tester waitForAnimationsToFinish];
        [tester waitForAbsenceOfViewWithAccessibilityLabel:@"MapTextFieldIndicator"];
        [tester waitForAnimationsToFinish];
    });
    
});

SpecEnd
