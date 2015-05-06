//
//  CUTERentPriceViewController.h
//  currant
//
//  Created by Foster Yin on 4/10/15.
//  Copyright (c) 2015 Foster Yin. All rights reserved.
//

#import "FXForms.h"
#import "CUTETicket.h"
#import <Bolts/Bolts.h>

@interface CUTERentPriceViewController : FXFormViewController

@property (strong, nonatomic) CUTETicket *ticket;

@property (nonatomic, copy) dispatch_block_t updatePriceCompletion;

@end
