import { NgModule } from '@angular/core';
import { CorePublicModule } from '../core/core-public.module';
import { GlobalModule } from './global.module';

@NgModule({
	exports: [CorePublicModule],
	imports: [GlobalModule]
})
export class SharedModule {}
