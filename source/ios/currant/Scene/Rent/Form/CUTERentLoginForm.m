//
//  CUTELoginForm.m
//  currant
//
//  Created by Foster Yin on 4/29/15.
//  Copyright (c) 2015 Foster Yin. All rights reserved.
//

#import "CUTERentLoginForm.h"
#import "CUTECommonMacro.h"
#import <NGRValidator.h>
#import "CUTEFormButtonCell.h"

@interface CUTERentLoginForm () {
    NSArray *_allCountries;
}

@end

@implementation CUTERentLoginForm


- (NSArray *)fields {
    return @[
             @{FXFormFieldKey: @"country", FXFormFieldTitle: STR(@"国家"), FXFormFieldOptions: _allCountries, FXFormFieldDefaultValue: _country? _country: (CUTEEnum *)[_allCountries firstObject], FXFormFieldAction: @"optionBack"},
             @{FXFormFieldKey: @"phone", FXFormFieldTitle: STR(@"手机号")},
             @{FXFormFieldKey: @"password", FXFormFieldTitle: STR(@"密码")},
             @{FXFormFieldKey: @"submit", FXFormFieldCell: [CUTEFormButtonCell class], FXFormFieldTitle:STR(@"登录并分享到微信"), FXFormFieldHeader: @"", FXFormFieldAction: @"submit"},
             ];
}

- (void)setAllCountries:(NSArray *)allCountries {
    _allCountries = allCountries;
}

- (NSError *)validateFormWithScenario:(NSString *)scenario {
    NSError *error = nil;
    [NGRValidator validateModel:self error:&error delegate:nil rules:^NSArray *{
        return @[NGRValidate(@"phone").required(),
                 NGRValidate(@"password").required()
                 ];
    }];
    return error;
}


@end
