import { Module } from "@nestjs/common";
import { CandidateModuleBase } from "./base/candidate.module.base";
import { CandidateService } from "./candidate.service";
import { CandidateResolver } from "./candidate.resolver";

@Module({
  imports: [CandidateModuleBase],
  providers: [CandidateService, CandidateResolver],
  exports: [CandidateService],
})
export class CandidateModule {}
