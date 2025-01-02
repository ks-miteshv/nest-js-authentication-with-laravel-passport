import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('test')
export class TestController {
  @Get('protected')
  @UseGuards(JwtAuthGuard)
  getProtected(@Request() req) {
    return {
      message: 'This is protected route',
      user: req.user
    };
  }

  @Get('public')
  getPublic() {
    return {
      message: 'This is public route'
    };
  }
}